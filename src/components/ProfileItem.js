import React from 'react'
import Profile from './Profile'
import PropTypes from 'prop-types';



const ProfileItem = ({item}) => {
    return <>
        <Profile
        name={item.name}
        tag={item.tag}
        location={item.location}
        avatar={item.avatar}
        stats={item.stats}
        />
    </>
}


Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
     location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
};
export default ProfileItem