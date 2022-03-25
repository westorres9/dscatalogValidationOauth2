import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';


function Pagination() {
    return(
        <div className="pagination-container">
            <ArrowIcon/>
            <div className="pagination-items">1</div>
            <div className="pagination-items">2</div>
            <div className="pagination-items">3</div>
            <div className="pagination-items">...</div>
            <div className="pagination-items">10</div>
            <ArrowIcon/>
        </div>
    );
}

export default Pagination;