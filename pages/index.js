import AboutUs from "../components/aboutUs"
import Buttons from "../components/buttons"
import Icons from "../components/icons"
import Profiles from "../components/profiles"
import Skills from "../components/skills"
export default function Home() {
  return (
    <>
      <div className="bg-base font-Poppins">
        <div className="">
          <img className="" src="./banner.svg"></img></div>
        <div className="container mx-auto">
          <div className="w-[367px] h-[455px] bg-base mx-auto -mt-4 shadow-xl rounded-lg">
            <Profiles></Profiles>
            <Icons></Icons>
            <Buttons></Buttons>
          </div>
          <div>
          <AboutUs></AboutUs>
          </div>
          <div>
            <Skills></Skills>
          </div>
        </div>
        <div className="flex justify-center">
        <div className="text-white text-xs mb-2">Made with LOVE by Reza</div>
        </div>
      </div>
    </>
  )
}
