function excuterSql(tx, sql, params = []){
    return new Promise((resolve, reject) => {
        tx.excuterSql(sql, params, function(result){
            resolve(resolve);
        })
    })
}
export default excuterSql;