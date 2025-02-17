'use client'

import { useParams, useRouter } from "next/navigation";
import { ApiPlayground } from "@/src/components/ApiPlayground";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function ApiPlaygroundPage({ configId }: { configId?: string }) {
  const params = useParams();
  const id = configId || params.id as string;
  const router = useRouter();

  return (
    <div className="mx-auto">
      <div className="lg:p-6">
        <div className="flex justify-between items-center my-4">
          <Button
            variant="ghost"
            onClick={() => router.push('/configs')} 
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button 
            onClick={() => window.location.href = `/configs/${id}/edit`}
            size="lg"
            variant="outline"
            className="gap-2 mr-6"
          >
            Edit Config
          </Button>
        </div>

        <div className="max-w-full lg:-mx-6">
          <ApiPlayground configId={id} />
        </div>
      </div>
    </div>
  );
}
