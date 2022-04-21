const initSqlJs = window.initSqlJs;

export function sqlite() {
  return initSqlJs({
    locateFile: () =>
      "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/sql-wasm.wasm",
  });
}

export function debugDB() {
  sqlite().then(function (SQL) {
    const db = new SQL.Database();

    db.run("CREATE TABLE test (col1, col2);");
    db.run("INSERT INTO test VALUES (?,?), (?,?)", [1, 111, 2, 222]);

    const stmt = db.prepare(
      "SELECT * FROM test WHERE col1 BETWEEN $start AND $end"
    );
    stmt.getAsObject({ $start: 1, $end: 1 });
    stmt.bind({ $start: 1, $end: 2 });
    while (stmt.step()) {
      const row = stmt.getAsObject();
      console.log("Here is a row: " + row);
    }
  });
}
