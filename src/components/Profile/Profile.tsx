import React, { FC, ReactElement } from 'react';

interface IProfile {
  name?: string;
}

const Profile: FC<IProfile> = ({ name }): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[96px] h-[96px] bg-primary-main mb-4 rounded-full flex items-center justify-center text-4xl">
        <h4>{name?.substring(0, 1)}</h4>
      </div>

      <h6 className="text-xl font-bold">Welcome, {name}</h6>
      <p>This is your personal task manager</p>
    </div>
  );
};

export default Profile;
