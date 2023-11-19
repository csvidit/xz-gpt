import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest)
{
  return NextResponse.json({ hello: 'world' })
}

// export async function POST(req, res)
// {
//     if(req.method != "POST")
//     {
//         return res.status(405).end();
//     }
//     else
//     {
//         const { user_id } = req.body;
//         if (user != undefined && history.length <= 0) {
//             const docRef = doc(db, "users", username.toString());
//             console.log("Trying to get Firestore data");
//             const fetchQuerySnapshot = async () => {
//               const querySnapshot = await getDoc(docRef);
//               setHistory(querySnapshot.data()?.history);
//               console.log(console.log(history));
//             };
//             fetchQuerySnapshot();
//           }

//     }
// }