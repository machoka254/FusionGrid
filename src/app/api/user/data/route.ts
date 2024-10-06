import prisma from "@/lib/prisma/prisma";
import { compareHash } from "@/lib/utils";
// export const dynamic = "auto"; // 'auto' | 'force-dynamic' | 'error' | 'force-static'
export const revalidate = 3600; //after 7 days // false | 0 | number
import { withAuthGeneral } from "@/lib/authRouteWrappers";

// GET ui data
const getHandler = async (request: Request) => {
  try {
    // console.log(`GET REQUEST: User data: `);
    const documents = await prisma.document.findMany();

    //success
    return Response.json({
      success: { documents },
    });
  } catch (err: any) {
    console.error("ERROR in route: api/user/data - GET \n > ", err);
    return Response.json({ error: "SERVER ERROR" });
  }
};

// export const POST = withAuthAdmin(postHandler);
// export const PUT = withAuthAdmin(putHandler);
export const GET = withAuthGeneral(getHandler);
// export const DELETE = withAuthAdmin(deleteHandler);
