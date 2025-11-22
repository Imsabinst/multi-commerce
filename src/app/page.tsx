import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant={"elevated"}>I am a Button</Button>
        </div>
        <p className="text-rose-500">Hello world</p>
        <div>
          <Input type="text" placeholder="Is this a form" />
        </div>
        <div>
          <Textarea placeholder="Is this a form" />
        </div>
        <div>
          <Progress value={40} />
        </div>
        <div>
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
