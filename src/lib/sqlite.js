const initSqlJs = window.initSqlJs;

export function saveDB() {
  const sqlite = initSqlJs({
    locateFile: () =>
      "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/sql-wasm.wasm",
  });

  sqlite.then(function (SQL) {
    //Create the database
    const db = new SQL.Database();
    // Run a query without reading the results
    db.run("CREATE TABLE test (col1, col2);");
    // Insert two rows: (1,111) and (2,222)
    db.run("INSERT INTO test VALUES (?,?), (?,?)", [1, 111, 2, 222]);

    // Prepare a statement
    const stmt = db.prepare(
      "SELECT * FROM test WHERE col1 BETWEEN $start AND $end"
    );
    stmt.getAsObject({ $start: 1, $end: 1 }); // {col1:1, col2:111}

    // Bind new values
    stmt.bind({ $start: 1, $end: 2 });
    while (stmt.step()) {
      //
      const row = stmt.getAsObject();
      console.log("Here is a row: " + JSON.stringify(row));
    }
  });
}
