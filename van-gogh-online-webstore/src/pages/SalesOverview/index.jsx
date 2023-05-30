import React,{useState} from 'react'
import './style.css'
import Navbar from '../../components/Navbar'
import Coluna from '../../components/Coluna-salesoverview'

const SalesOverview = () => {

    const[TotalIncome,setTotalIncome]= useState(['$ 4009.00','$ 5689.00','$ 5568.00','$ 3207.00','$ 6522.00','$ 4859.00']);
    const[AmountSales,setAmountSales]= useState(['1200','2500','456','1423','2100','1266']);
    const[AvgTicket,setAvgTicket]= useState(['$ 209.00','$ 390.00','$ 750.00','$ 248.00','$ 659.00','$ 129.00']);
    const[QtyProducts,setQtyProducts]= useState(['100','250','100','250','250','160']);


    return <>
    <Navbar /><br/><br/><br/><br/>

    <div className='container-sales'>
        <div className='profile-sales'></div>
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
                    <div>January 23</div>
                    <div>February 23</div>
                    <div>March 23</div>
                    <div>April 23</div>
                    <div>May 23</div>
                    <div>June 23</div>
                </div>
                <div className='element-coluna2'>
                    <div>Jan23</div>
                    <div>Feb23</div>
                    <div>Mar23</div>
                    <div>Apr23</div>
                    <div>May23</div>
                    <div>June23</div>
                </div>
                <Coluna valores={TotalIncome}/>
                <Coluna valores={AmountSales}/>
                <Coluna valores={AvgTicket}/>
                <Coluna valores={QtyProducts}/>
                
                
            </div>



            </div>
        </div>
    </div>
    </>


}

export default SalesOverview