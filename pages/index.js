import AboutMe from "../components/aboutMe";
import Buttons from "../components/buttons";
import Icons from "../components/icons";
import Profiles from "../components/profiles";
import Skills from "../components/skills";
export default function Home() {
  return (
    <>
    <head>
    <link rel="icon" href="icon_path" type="image/icon type"/>
    </head>
      <div className="block -z-40 bg-base">
        <img className="" src="./banner.svg"></img>
      </div>
      <div className="bg-base font-Poppins">
        <div className=" lg:-mt-72">
          <div className="container mx-auto lg:-mt-72">
            <div className="z-50">
              <div className="w-[350px] h-[455px] bg-base mx-auto -mt-4 shadow-xl rounded-lg lg:w-[1178px] lg:h-[505px]">
                <Profiles></Profiles>
                <Icons></Icons>
                <Buttons></Buttons>
              </div>
            </div>
            <div className="container mx-auto">
              <AboutMe></AboutMe>
            </div>
            <div className="container mx-auto">
              <Skills></Skills>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-white text-xs mb-2">Made with LOVE by Reza</div>
        </div>
      </div>
    </>
  );
}
