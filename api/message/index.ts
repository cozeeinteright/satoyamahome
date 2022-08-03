import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    try {
        await context.res.json({
        text: "Hello from the API"
    });
    } catch(err) {
        console.log(err)
    }
};

export default httpTrigger;