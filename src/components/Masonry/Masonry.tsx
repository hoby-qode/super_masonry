import React from 'react'
import styles from './masonry.module.css'
import Image from 'next/image'
type Card = { title: string; desc: string; picture: string }
const CARDS: Card[] = [
  {
    title: 'Lorem ipsum dolor sit, amet consectetur  provident cum!',
    desc:
      'Lorem ipsum dolor sit, amet consecteturconsectetur  dolor sit, amet consectetur   provident cum ,',
    picture: '1.jpg',
  },
  {
    title: 'Lorem ipsum dolor provident cum!',
    desc:
      'Lorem ipsum dolor sit, amet consectetur  consectetur  dolor sit, amet consectetur provident cum ,',
    picture: '2.jpg',
  },
  {
    title: 'Lorem ipsum dolor sit, amet !',
    desc:
      'Lorem ipsum dolor sit, amet consectetur  dolor sit, amet consectetur consectetur  dolor sit,amet consectetur  providentamet consectetur  provident amet consectetur consectetur  dolor sit, amet consecteturconsectetur  provident cum ,',
    picture: '2.jpg',
  },
  {
    title: 'Lorem ipsum provident cum!',
    desc: 'Lorem ipsum dolor sit, amet consectetur  provident cum ,',
    picture: '3.jpg',
  },
  {
    title: 'Lorem ipsum dolor provident cum!',
    desc:
      'Lorem ipsum dolor sit, amet consectetur  consectetur  dolor sit, amet consectetur provident cum ,',
    picture: '2.jpg',
  },
  {
    title: 'Lorem  cum!',
    desc:
      'Lorem ipsum dolor sit, amet consectetur  provident cum ,Lorem ipsum dolor sit, amet consectetur  provident cum',
    picture: '1.jpg',
  },
  {
    title: 'Lorem  cum!',
    desc:
      'Lorem ipsum dolor sit, amet consectetur  provident cum ,Lorem ipsum dolor sit, amet consectetur  provident cum',
    picture: '1.jpg',
  },
  {
    title: 'Lorem ipsum dolor sit, amet consectetur  provident cum!',
    desc:
      'Lorem ipsum dolor sit, amet consectetur  dolor sit, amet consectetur dolor sit, amet consectetur dolor sit, amet consectetur dolor sit, amet consecteturprovident cum ,',
    picture: '3.jpg',
  },
  {
    title: 'Lorem ipsum dolor provident cum!',
    desc:
      'Lorem ipsum dolor sit, amet consectetur  consectetur  dolor sit, amet consectetur provident cum ,',
    picture: '2.jpg',
  },
]

const Masonry = () => {
  return (
    <>
      <section className={styles.masonry}>
        <div className="container">
          <h1>Masonry</h1>
          <div className={styles.masonry_loop}>
            {CARDS.map((item, key) => {
              return (
                <Item
                  key={key}
                  picture={item.picture}
                  title={item.title}
                  desc={item.desc}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

function Item(props:{ picture:string, title:string, desc:string }) {
  return (
    <div className={styles.item}>
      <div className={styles.item_picture}>
        <Image
          src={`/images/${props.picture}`}
          alt="picture"
          priority
          width={500}
          height={500}
        />
      </div>
      <div className={styles.item_content}>
        <h2 className={styles.item_content__title}>{props.title}</h2>
        <div className={styles.item_content__desc}>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Masonry
