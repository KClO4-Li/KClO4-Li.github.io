#import "@preview/chic-hdr:0.5.0": *
#import "@preview/cuti:0.2.1":show-cn-fakebold
#let Heiti = ("Times New Roman", "SimHei")
#let Songti = ("Times New Roman", "SimSun")
#let Kai = ("Times New Roman", "KaiTi")
#let project(
  title: "单摆法测重力加速度 实验报告",
  name: "少年班学院 李若贤 PB24000070",
  author: "(中国科学技术大学 李若贤   安徽合肥   230000)",
  guide: "浦其荣",
  abstract: none,
  keywords:none,
  date: "2025年3月25日",
  part:  (34%, 40%, 20%),
  body,
) = {
  show: chic.with(
    chic-header(
      left-side:  
        text(size:12pt,font:Heiti)[
          #title
          ],
      center-side:text(size:12pt,font:Heiti)[
          #name
          ],
      right-side: text(size: 10pt, font: Songti)[
        #date],
      side-width: part,
    ),
    chic-footer(
        right-side: chic-page-number()
    ),
    chic-separator(on: "header", stroke()),
    chic-offset(20%),
    chic-height(2.5cm),
  )
  // Set the document's basic properties.
  set document(author: name, title: title)
  set page(margin: (left:35pt,right:35pt))
  set text(font: Songti, lang: "zh", size:13pt)
  show heading:set text(font:Songti)
  show: show-cn-fakebold
  // Title row.
  align(center)[
    #text(weight: 700, 1.25em, font:Heiti, title)

    #if(author != none){text(size:10.5pt,author)}

    #text(size:10.5pt,guide)
  ]

  // Abstract.
  if(abstract != none){pad(
    x: 1em,
     align(left)[#text(1.1em,font:Kai, [摘要])
#text(0.9em,font:Kai, abstract)
    ]
  )}
  
  if(keywords != none){pad(
    x:1em,
    align(left)[
      #text(1.1em,font:Kai, [关键词])
      #text(0.9em,font:Kai, keywords)
    ]
  )}
  // Main body.
  set par(first-line-indent: (amount: 2em, all: true))
  body
}


