import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h3>
        <p>
          Oü Almar Puit on Kagu-Eestis asuv kohalikul kapitalil põhinev 2006. aastal loodud ettevõte.
          Meie eesmärgiks on pakkuda Teile loodussõbralikke tooteid koduaeda, puhkekohta nii era- kui ka ärikliendile.
          Väikeehitised vastavalt Teie soovile.
        </p>
        <p>
          Teise haruna tegeleme kvaliteetsete küttepuude tootmisega ahjudele, pliitidele ja kaminatele.
          Halu pikkus Teie soovi järgi. Võimalus saada aastaringselt kuiva küttepuud. Pakendame kaminapuud 40 l ja 60 l kottidesse,
          samuti pakendame 1 m3 kastidesse. Kuivatus toimub looduslikult ja spetsiaalses küttepuude kuivatis.
        </p>
        <p>
          Ostame kasepaberipuud, 3m küttepuud ja piiratud koguses palki.
        </p>
        <p>
          Oleme avatud pakkumistele.
        </p>
      </h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='_______________________________________________________________'
              label='Avaleht'
            />
            <CardItem
              src='images/img-2.jpg'
              text='_______________________________________________________________'
              label='Avaleht'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='________________________________________'
              label='Avaleht'
            />
            <CardItem
              src='images/img-4.jpg'
              text='________________________________________'
              label='Avaleht'
            />
            <CardItem
              src='images/img-5.jpg'
              text='________________________________________'
              label='40 alusel 30 tk'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-6.jpg'
              text='________________________________________'
              label='40 pakendatult alusele 2'
            />
            <CardItem
              src='images/img-7.jpg'
              text='________________________________________'
              label='40 pakendatult alusele'
            />
            <CardItem
              src='images/img-8.jpg'
              text='________________________________________'
              label='40l 2x30'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
