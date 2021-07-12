import React from 'react'
import StoryCard from '../components/StoryCard'
const stories = [{
    name: "Scarlett Johansson",
    src: "https://bit.ly/3rgp2NP",
    profile: "https://bit.ly/3rgp2NP"
}, {
    name: "Mario Bross",
    src: "https://bit.ly/3xzwOVj",
    profile: "https://bit.ly/3xzwOVj"
}, {
    name: "Rocky Balboa",
    src: "https://bit.ly/3e8RStM",
    profile: "https://bit.ly/3e8RStM"
}, {
    name: "Terminator T-1000",
    src: "https://bit.ly/2VA0weD",
    profile: "https://bit.ly/2VA0weD"
}, {
    name: "Wonder Woman",
    src: "https://bit.ly/3yI4boS",
    profile: "https://bit.ly/3yI4boS"
}]
function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard name={story.name} src={story.src} profile={story.profile} key={story.name} />
            ))}
        </div>
    )
}

export default Stories
