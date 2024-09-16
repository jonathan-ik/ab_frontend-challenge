import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { followUser, unFollowUser } from "../api/services/relationship";

export default function UserCard({ profile, status }: any) {
  const [isFollowing, setIsFollowing] = useState(status || false);
  const { mutate: follow, error: followError } = followUser();
  const { mutate: unfollow, error: unfollowError } = unFollowUser();

  const handleFollowToggle = () => {
    const userId = profile?.user_id;

    if (isFollowing) {
      unfollow(userId);
      setIsFollowing(false);
    } else {
      follow(userId);
      setIsFollowing(true);
    }
  };

  if (followError || unfollowError) {
    console.error("Error:", followError || unfollowError);
  }

  return (
    <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495518912054-50518c0b6606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZhbGxlfGVufDB8fHx8MTY4MDk5NTUy&ixlib=rb-1.2.1&q=80&w=1600")' }}>
      <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md">
        <div>
          <img alt="" src="https://images.squarespace-cdn.com/content/v1/5feb6d2cab06677bba637eba/1678905323964-FSN7YA7WOQFDF57T7IQ2/LAM+images+%284%29.jpg" className="h-32 w-full object-cover lg:h-48 rounded-t-lg" />
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-left mb-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img alt="" src={profile?.avatar} className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" />
            </div>
            <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                <h1 className="truncate text-2xl font-bold text-gray-900">{profile?.first_name + " " + profile?.last_name}</h1>
                <p className="truncate text-sm text-gray-500">{profile.email}</p>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button type="button" className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <EnvelopeIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" />
                  <span>Message</span>
                </button>
                {/* Follow/Unfollow Button */}
                <button type="button" onClick={handleFollowToggle} className={`inline-flex justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm ${isFollowing ? "bg-red-500 text-white" : "bg-blue-500 text-white"}`}>
                  <CheckBadgeIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
                  <span>{isFollowing ? "Unfollow" : "Follow"}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
            <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
