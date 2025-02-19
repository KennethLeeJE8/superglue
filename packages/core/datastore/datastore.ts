import { DataStore } from '@superglue/shared';
import { RedisService } from './redis.js';
import { MemoryStore } from './memory.js';
import { FileStore } from './filestore.js';

export function createDataStore(config: {
  type: 'redis' | 'memory' | 'file';
}): DataStore {
  if (config.type === 'redis') {
    const redisConfig = getRedisConfig();
    return new RedisService(redisConfig);
  }
  else if (config.type === 'file') {
    const fileStoreConfig = getFileStoreConfig();
    return new FileStore(fileStoreConfig.storageDir);
  }
  return new MemoryStore();
} 

export function getFileStoreConfig() {
  return {
    storageDir: process.env.STORAGE_DIR || '/data'
  };
}

export function getRedisConfig() {
  return {
    host: process.env.REDIS_HOST!,
    port: parseInt(process.env.REDIS_PORT || '6379'),
    username: process.env.REDIS_USERNAME!,
    password: process.env.REDIS_PASSWORD!
  };
}