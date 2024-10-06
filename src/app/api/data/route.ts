import prisma from "@/lib/prisma/prisma";
import { compareHash } from "@/lib/utils";
// export const dynamic = "auto"; // 'auto' | 'force-dynamic' | 'error' | 'force-static'
export const revalidate = 3600; //after 7 days // false | 0 | number

// GET ui data
const getHandler = async (request: Request) => {
  try {
    // console.log(`GET REQUEST: UI data: `);

    //  Prisma queries
    const institutions = await prisma.institution.findMany();

    //success
    return Response.json({
      success: { institutions },
    });
  } catch (err: any) {
    console.error("ERROR in route: api/data - GET \n > ", err);
    return Response.json({ error: "SERVER ERROR" });
  }
};

// export const POST = postHandler;
export const GET = getHandler;
