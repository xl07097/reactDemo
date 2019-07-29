function excuterSql(tx, sql, params = []){
    return new Promise((resolve, reject) => {
        tx.executeSql(sql, params, function(txs, result){
            resolve(result);
        });
    });
}
export default excuterSql;