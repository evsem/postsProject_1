import React from 'react'
import ButtonGrey from '../../UI/ButtonGrey/ButtonGrey'
import classes from './Item.module.css'

const Item = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.infoContainer}>
        <h3 className={classes.infoContainer_titlePost}>JS</h3>
        <p className={classes.infoContainer_infoAboutPost}>Language</p>
      </div>
      <ButtonGrey>Delete</ButtonGrey>
    </div>
  )
}

export default Item
