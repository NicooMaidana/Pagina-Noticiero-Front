import React from 'react'
import styles from './styles.module.css'

const Boton = ({ children, ...prop }) => {
	return (
		<div>
			<button className={`bg-blue-500 hover:bg-blue-700 ${styles.prueba} font-bold py-2 px-4 rounded ${prop.className}`}>{children}</button>
		</div>
	)
}

export default Boton
