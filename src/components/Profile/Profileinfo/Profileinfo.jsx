import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './Profileinfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png'

const Profileinfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    debugger
   if (e.target.files[0]) {
    savePhoto(e.target.files[0]);
  }
}
  return (
    <div className={s.content}>
      <div>
        <img className={s.first_image} src='https://rich-tour.com/uploads/default/kcfinder/images/Italy%20Village%20%26%20Beach%20Resort/%D0%A0%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA1.jpg' />
      </div>
      <div>
        <img className={s.mainPhoto} src={profile.photos.large || userPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
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