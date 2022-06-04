---
sidebar_position: 4
slug: '/context'
---

# Contexto

```plantuml
class App {
 + columns
 + rows
}

package TableProvider <<Context>> {
  class Table {}
  class TableHead {}
  class TableColumns {
   + columns
  }
  class TableBody {
   + rows
  }
  class TableRow {
   + row
  }
}



App *--> Table
Table *--> TableHead
Table *--> TableBody

TableHead *--> TableColumns
TableBody *--> TableRow

TableBody --> TableRow

App ---> TableProvider
```