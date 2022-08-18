import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './Profileinfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const Profileinfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div className={s.content}>
      <div>
        <img className={s.first_image} src='https://rich-tour.com/uploads/default/kcfinder/images/Italy%20Village%20%26%20Beach%20Resort/%D0%A0%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA1.jpg' />
      </div>
      <div>
        <img className={s.second_image} src={profile.photos.large} />
        <div className={s.about_me}>
          <div>Имя:&nbsp;&nbsp;
            <span className={s.decription}>{profile.fullName}</span>
          </div>
          <div>Обо мне: {profile.aboutMe}</div>
          <div>Ищу работу: {profile.lookingForAJobDescription}</div>
          <div>Контакты: {profile.contacts.facebook}</div>
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  )
}

export default Profileinfo;