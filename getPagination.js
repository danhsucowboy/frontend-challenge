const getPagination = (offset, limit, total) => {
    const renderRange = 5;
    let totalPage = limit >= total ? 1 : Math.ceil(total/limit);
    let currentPage = offset >= total ? totalPage : Math.floor(offset/limit)+1;
    let renderedPages = [];
    let renderedOffset = Math.floor(renderRange/2);

    const getRenderedPage = (setting) => {
        let index = setting;
        while(renderedPages.length < renderRange){
            renderedPages.push(index);
            index++;
        }
    }

    if(currentPage <= renderedOffset+1){
        getRenderedPage(1);
    }
    else if(currentPage === totalPage || currentPage >= (totalPage - renderedOffset)){
        getRenderedPage(totalPage-renderRange+1);
    }
    else{
        getRenderedPage(currentPage-renderedOffset);
    }

    return {currentPage, totalPage, renderedPages}
}

const {currentPage, totalPage, renderedPages} = getPagination(15, 5, 33);

console.log({currentPage, totalPage, renderedPages});
console.log(renderedPages);