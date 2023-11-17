import React from 'react';
import PencilIcon from '../icons/Pencil';
import DeleteIcon from '../icons/Delete'

export default function CardMaster({
    id, section, product_name, price, cod, start, gender, brand,
    sale_price, cover_photo, photos, information, sizes, deleteArticle, categorie,
    activeUpdateArticle

}) {


    const article = {
        id: id,
        section: section,
        product_name: product_name,
        price: price,
        sale_price: sale_price,
        cover_photo: cover_photo,
        photos: photos,
        information: information,
        sizes: sizes,
        cod: cod,
        start: start,
        gender: gender,
        brand: brand
    }

    return (
        <div className="card master">
            <div className="card-info">
                <span className="brand-text">{product_name}</span>
                <span className="model-text">{information}</span>
                <span className="brand-text">{section}</span>
                <div className="container-add">
                    <span className="item-price-text"> ${price}</span>
                </div>
            </div>
            <div className="card-image">
                <img src={cover_photo} alt={information} className="item-image-master" loading="lazy" />
            </div>
            <div className="action-articles-btns">
                <div onClick={() => activeUpdateArticle(article)} className="icon"> <PencilIcon /></div>
                <div onClick={() => deleteArticle(id)} className="icon"><DeleteIcon /> </div>
            </div>
        </div>
    )
}