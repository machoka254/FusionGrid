import { Separator } from "@/components/ui/separator";
import { AccountForm } from "../_components/new-doc-form";

export default function NewDocPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Create Document</h3>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}
