import { handleAuth } from '@auth0/nextjs-auth0';

import { NextRequest, NextResponse } from "next/server"

export const GET = handleAuth();

// export const GET = async (req: NextRequest) => { 
//     return NextResponse.json({ hello: 'world' })
// }