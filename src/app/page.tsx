import Loading from "@/components/Loading/Loading";
import HomePage from "@/components/HomePage";
import LandingPage from "@/components/LandingPage";
import DisabledLandingPage from "@/components/DisabledLandingPage";

export default function Home() {
  // return <UnderConstructionLandingPage/>

  // const { user, error, isLoading } = useUser();
  // const router = useRouter();
  // if(isLoading)
  // {
  //   return(<Loading/>);
  // }
  // if(user)
  // {
  //   return <HomePage/>
  // }
  // else
  // {
  //   return <LandingPage/>
  // }

  return <DisabledLandingPage/>
}