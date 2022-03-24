import Icon from "./icon"
export default function Icons() {
    return (
        <div className="">
            <ul className="flex justify-center mt-5">
                <Icon><a href="https://instagram.com/revernry"><img className="h-[35px]" src="./instagram-ic.svg"></img></a></Icon>
                <Icon><a href="https://dribbble.com/Arzee"><img className="h-[45px] -mt-1" src="./dribble-ic.svg"></img></a></Icon>
                <Icon><a href="https://github.com/AkbarFahreza"><img className="h-[35px]" src="./github-ic.svg"></img></a></Icon>
                <Icon><a href="https://id.pinterest.com/ArzeeSign/_created"><img className="h-[35px]" src="./pinterest-ic.svg"></img></a></Icon>
            </ul>
        </div>
    )
}