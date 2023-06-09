import React, { useState } from 'react'
import './style.css'
import Navbar from '../Navbar'
import Coluna from '../Coluna-salesoverview'

const TabelaSales = () => {

    const [totalIncome, setTotalIncome] = useState(['$ 4009.00', '$ 5689.00', '$ 5568.00', '$ 3207.00', '$ 6522.00', '$ 4859.00']);
    const [amountSales, setAmountSales] = useState(['1200', '2500', '456', '1423', '2100', '1266']);
    const [avgTicket, setAvgTicket] = useState(['$ 209.00', '$ 390.00', '$ 750.00', '$ 248.00', '$ 659.00', '$ 129.00']);
    const [qtyProducts, setQtyProducts] = useState(['100', '250', '100', '250', '250', '160']);
    const [currentMonth, setCurrentMonth] = useState(7);
    const [currentYear, setCurrentYear] = useState(23);
    const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const months2 = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    let pastSix = [];
    for (let i = currentMonth - 6; i <= currentMonth - 1; i++) {
        if (i <= 0) {
            pastSix.push(months[i + 12] + ' ' + (currentYear - 1))
        }
        else
            pastSix.push(months[i] + ' ' + currentYear)
    }

    let pastSix2 = [];
    for (let i = currentMonth - 6; i <= currentMonth - 1; i++) {
        if (i <= 0) {
            pastSix2.push(months2[i + 12] + (currentYear - 1))
        }
        else
            pastSix2.push(months2[i] + currentYear)
    }



    return <>
        <Navbar bgColor='#FFF' />

        <div className='container-sales'>

            <div className='tabela-sales'>
                <div className='titulo-sales'>Sales Overview</div>
                <div className='past-six'>Past six mounths</div>
                <div className='tabela'>
                    <div className='line1'></div>
                    <div className='categories'>
                        <div className='element-categorie-null-ini'></div>
                        <div className='element-categorie'>Total Income</div>
                        <div className='element-categorie'>Amount of Sales</div>
                        <div className='element-categorie'>Avg. Ticket</div>
                        <div className='element-categorie'>Qty. Products</div>
                    </div>
                    <div className='line2'></div>
                    <div className='colunas'>
                        <div className='element-coluna'>
                            {pastSix.map((valor) => (
                                <div>{valor}</div>
                            ))}

                        </div>
                        <div className='element-coluna2'>
                            {pastSix2.map((valor) => (
                                <div>{valor}</div>
                            ))}
                        </div>
                        <Coluna valores={totalIncome} />
                        <Coluna valores={amountSales} />
                        <Coluna valores={avgTicket} />
                        <Coluna valores={qtyProducts} />
                    </div>
                </div>
            </div>
        </div>
    </>


}

export default TabelaSales