var documenterSearchIndex = {"docs":
[{"location":"userguide/#Getting-Started-1","page":"User Guide","title":"Getting Started","text":"","category":"section"},{"location":"userguide/#Installation-1","page":"User Guide","title":"Installation","text":"","category":"section"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"From a Julia session, run:","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"julia> using Pkg\n\njulia> Pkg.add(\"XLSXasJSON\")","category":"page"},{"location":"userguide/#Read-Excel,-Write-to-JSON-File-1","page":"User Guide","title":"Read Excel, Write to JSON File","text":"","category":"section"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"You can read whole workbook, or specify sheet you want to read from Excel file. each rows on sheet are pared to Array{OrderedDict, 1} in Julia. ","category":"page"},{"location":"userguide/#JSONWorkbook-1","page":"User Guide","title":"JSONWorkbook","text":"","category":"section"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"    using XLSXasJSON\n\n    p = joinpath(dirname(pathof(XLSXasJSON)), \"../test/data\")\n    xf = joinpath(p, \"example.xlsx\")\n    jwb = JSONWorkbook(xf)","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"You can access worksheet via jwb[1] or jwb[\"sheetname\"]","category":"page"},{"location":"userguide/#JSONWorksheet-1","page":"User Guide","title":"JSONWorksheet","text":"","category":"section"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"    using XLSXasJSON\n\n    p = joinpath(dirname(pathof(XLSXasJSON)), \"../test/data\")\n    xf = joinpath(p, \"example.xlsx\")\n    jws = JSONWorksheet(xf, :Sheet1)","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"You can access rows of data with jws[1, :] ","category":"page"},{"location":"userguide/#Writing-JSON-File-1","page":"User Guide","title":"Writing JSON File","text":"","category":"section"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"    using XLSXasJSON\n\n    p = joinpath(dirname(pathof(XLSXasJSON)), \"../test/data\")\n    xf = joinpath(p, \"example.xlsx\")\n    jwb = JSONWorkbook(xf)\n\n    # Writing whole sheet\n    XLSXasJSON.write(pwd(), jwb)\n    # Writing singsheet\n    XLSXasJSON.write(\"Sheet1.json\", jwb[1]; indent = 2)","category":"page"},{"location":"userguide/#Examples-1","page":"User Guide","title":"Examples","text":"","category":"section"},{"location":"userguide/#Any-1","page":"User Guide","title":"Any","text":"","category":"section"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"A simple, row oriented key","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"/color\nred","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"produces","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"[{\n  \"color\": \"red\"\n}]","category":"page"},{"location":"userguide/#Dict-1","page":"User Guide","title":"Dict","text":"","category":"section"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"A dotted key name looks like","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"/color/name color/value\nred #f00","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"and produces","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"[{\n  \"color\": {\n    \"name\": \"red\",\n    \"value\": \"#f00\"\n    }\n}]","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"It can has as many layers as you want","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"/a/b/c/d/e/f\nIt can be done","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"and produces","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"[{\n    \"a\": {\n      \"b\": {\n        \"c\": {\n          \"d\": {\n            \"e\": {\n              \"f\": \"It can be done\"\n            }\n          }\n        }\n      }\n    }\n  }]\n","category":"page"},{"location":"userguide/#Array-1","page":"User Guide","title":"Array","text":"","category":"section"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"Sometimes it's convinient to put array values in seperate column in XLSX ","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"/color/name color/rgb/1 color/rgb/2 color/rgb/3\nred 255 0 0","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"[{\n  \"color\": {\n    \"name\": \"red\",\n    \"rgb\": [255, 0, 0]\n    }\n}]","category":"page"},{"location":"userguide/#Type-Declarations-1","page":"User Guide","title":"Type Declarations","text":"","category":"section"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"You can declare Type with :: operator same way as Julia.","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"value of Vector will be splitted with deliminator ';'.\nOnly json supported types will be checked for validation","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"/array::Vector /array_int::Vector{Int} /array_float::Vector{Float64}\n100;200;300 100;200;300 100;200;300","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"and produces","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"[{\n  \"array\": [\n    \"100\",\n    \"200\",\n    \"300\"\n  ],\n  \"array_int\": [\n    100,\n    200,\n    300\n  ],\n  \"array_float\": [\n    100.0,\n    200.0,\n    300.0\n  ]\n}]","category":"page"},{"location":"userguide/#All-of-the-above-1","page":"User Guide","title":"All of the above","text":"","category":"section"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"Now you know all the rules necessary to create any json data structure you want with just a column name This is a more complete row oriented example","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"/a/b /a/b2::Vector{Int} /a/b3/1,Type /a/b3/1/Amount /a/b3/2/Type /a/b3/2/Amount /a/b3/3/Type /a/b3/3/Amount::Vector\nFooood 100;200;300 Cake 50 Chocolate 19 Ingredient Salt;100","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"would produce","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"[\n  {\n    \"a\": {\n      \"b\": \"Fooood\",\n      \"b2\": [\n        100,\n        200,\n        300\n      ],\n      \"b3\": [\n        {\n          \"Type\": \"Cake\",\n          \"Amount\": 50\n        },\n        {\n          \"Type\": \"Chocolate\",\n          \"Amount\": 19\n        },\n        {\n          \"Type\": \"Ingredient\",\n          \"Amount\": [\n            \"Salt\",\n            \"100\"\n          ]\n        }\n      ]\n    }\n  }\n]\n","category":"page"},{"location":"userguide/#","page":"User Guide","title":"User Guide","text":"You can do same with column oriented sheets. with row_oriented = false keyword argument. ","category":"page"},{"location":"#XLSXasJSON.jl-1","page":"Index","title":"XLSXasJSON.jl","text":"","category":"section"},{"location":"#Introduction-1","page":"Index","title":"Introduction","text":"","category":"section"},{"location":"#","page":"Index","title":"Index","text":"XLSXasJSON.jl is a Julia package to convert Excel spread sheet to json encoded file. Designated row or colum must be standardized JSONPointer token, ramaning rows will passed to json encoded file.","category":"page"},{"location":"#","page":"Index","title":"Index","text":"Please report bugs or make a feature request to opening an issue","category":"page"},{"location":"#User-Guide-1","page":"Index","title":"User Guide","text":"","category":"section"},{"location":"#","page":"Index","title":"Index","text":"Pages = [\"userguide.md\"\n]\nDepth = 1","category":"page"}]
}