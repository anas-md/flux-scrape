import { ExecutionEnvironment } from "@/lib/types";
import { PageToHtmlTask } from "../task/PageToHtml";

export async function PageToHtmlExecutor(
  environment: ExecutionEnvironment<typeof PageToHtmlTask>
): Promise<boolean> {
  try {
    const html = await environment.getPage()!.content();
    environment.setOutput("HTML", html);
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
