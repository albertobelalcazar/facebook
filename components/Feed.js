import React from 'react'
import InputBox from './InputBox'
import Stories from './Stories'
import Posts from './Posts'

function Feed({ posts }) {
    return (
        <div className="flex-grow h-screenpb-44 tp-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
            <div className="mx-auto max-w-md md:max-w-lg">
                {/* Stories */}
                <Stories />
                {/* InputBox */}
                <InputBox />
                {/* Post */}
                <Posts
                    posts={posts}
                />
            </div>
        </div>
    )
}

export default Feed
