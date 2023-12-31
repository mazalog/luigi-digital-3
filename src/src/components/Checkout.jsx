import React from 'react'

export default function Checkout({ handleInputChange, typeOrder, setTypeOrder, values, zones }) {
    return (
        <div className="container-Checkout">
            <div className="container-type-transation">
                <p className="title-Checkout">Tipo de pedido</p>
                <div className="types">
                    <div className={`type ${typeOrder === 'delivery' ? 'active' : ''}`} onClick={() => setTypeOrder('delivery')}>
                        <span>Delivery</span>
                    </div>
                    <div className={`type ${typeOrder === 'recoger' ? 'active' : ''}`} onClick={() => setTypeOrder('recoger')}>
                        <span>Digital o Para recoger en el local</span>
                    </div>
                </div>
            </div>
            <div className="container-data">
                {
                    typeOrder === 'delivery' ? <>
                        <form>
                            <p className="title-Checkout">Sus datos</p>
                            <label className="label">Nombre y apellido</label>
                            <input value={values.nombre} name="nombre" className="input" onChange={handleInputChange} />
                            <label className="label">Telefono</label>
                            <input value={values.telefono} name="telefono" className="input" onChange={handleInputChange} />
                            <p className="title-Checkout">Direccion de envio</p>
                            <label className="label">Direccion</label>
                            <input value={values.direccion} name="direccion" className="input" onChange={handleInputChange} />
                            <label className="label">Numero de apartamento, casa, oficina (opcional)</label>
                            <input value={values.casa} name="casa" className="input" onChange={handleInputChange} />
                            <label className="label">Localidad</label>
                            <select value={values.localidad} name="localidad" className="select" onChange={handleInputChange}>
                                <option value="">Seleccionar</option>
                                {
                                    zones.map((zone, index) =>
                                        <option key={zone.id} value={zone.addres}>
                                            {zone.addres} - ${zone.price}
                                        </option>
                                    )
                                }
                            </select>
                            <p className="title-Checkout">Metodo de pago </p>
                            <label className="label">Seleccione un metodo</label>
                            <select value={values.metodoPago} name="metodoPago" className="select" onChange={handleInputChange}>
                                <option value="">Seleccionar</option>
                                <option value="Zelle">Zelle</option>
                                <option value="Paypal">Paypal</option>
                                <option value="Bolivares">Bolivares</option>
                                <option value="Banesco Panama">Banesco Panama</option>
                                <option value="Binance USDT">Binance USDT</option>
                            </select>
                        </form>
                    </> :
                        <form>
                            <p className="title-Checkout">Sus datos</p>
                            <label className="label">Nombre y apellido</label>
                            <input value={values.nombre} name="nombre" className="input" onChange={handleInputChange} />
                            <label className="label">Telefono</label>
                            <input value={values.telefono} name="telefono" className="input" onChange={handleInputChange} />
                            <p className="title-Checkout">Metodo de pago </p>
                            <label className="label">Seleccione un metodo</label>
                            <select value={values.metodoPago} name="metodoPago" className="select" onChange={handleInputChange}>
                                <option value="">Seleccionar</option>
                                <option value="Zelle">Zelle</option>
                                <option value="Paypal">Paypal</option>
                                <option value="Bolivares">Bolivares</option>
                                <option value="Banesco Panama">Banesco Panama</option>
                                <option value="Binance USDT">Binance USDT</option>
                            </select>
                        </form>
                }
            </div>
        </div>
    )
}
