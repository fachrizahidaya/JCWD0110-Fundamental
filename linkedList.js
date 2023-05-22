class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    /* kita menggunakan contoh linked list berikut 
    let linkedList = {
      head: {
        element: "A",
        next: {
          element: "B"
          next: null
        }
      },
    };
    */
    // ingin menambahkan linkedList.add("C")
    let node = new Node(element);

    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      // yang sudah ada di this.head dimasukkan ke current
      /**
       * current: 
        head: {
          element: "A",
          next: {
            element" "B",
            next: null
          }
        },
       */

      while (current.next) {
        // di-looping dengan kondisi jika current nya ada, tidak null, maka element dan next untuk "B"
        // ditambahkan di next element "A"
        // lalu pada saat menambahkan linkedList.add("C"), current.next yang ada di element "B" adalah null,
        // maka looping berhenti
        current = current.next;
      }
      // sehingga element "C" akan bertambah di current.next element "B"
      current.next = node;
    }
    // menambahkan sizenya jadi 1 setiap ada penambahan element dengan linkedList.add
    this.size += 1;
  }

  printList() {
    /* kita menggunakan contoh linked list berikut 
    let linkedList = {
      head: {
        element: "A",
        next: {
          element: "B",
          next: null
        }
      },
    };
    */
    let curr = this.head;
    //  variabel current akan berisi this.head yaitu
    /**
    * 
   head: {
     element: "A",
     next: {
          element: "B",
          next: null
        }
   },
    */
    while (curr) {
      // di-looping dengan kondisi jika curr nya ada, tidak null, maka akan di console.log "A"
      // di-looping lagi karena sekarang elementnya B makan console.log "B"
      // looping terakhir karna curr.next nya null maka looping berhenti
      console.log(curr.element);
      // lalu curr berubah menjadi curr.next yaitu
      curr = curr.next;
      /** hasilnya adalah
       * {
          element: "B",
          next: null
        }
       */
    }
  }

  insertAt(element, index) {
    // kita mau menambahkan "C" ke [0]
    /**
     * let linkedList = {
      head: {
        element: "A",
        next: {
          element: "B",
          next: null
        }
      },
    };
     */
    if (index < 0 || index > this.size) {
      return console.log("Please enter a valid index");
    } else {
      let node = new Node(element);
      let curr = this.head;

      if (index == 0) {
        node.next = this.head;
        this.head = node;
        /** hasilnya adalah
         * 
        head: {
        element: "C",
        next : {
          element: "A",
          next: {
            element: "B",
            next: null
        }
          }
        },
         */
      } else {
        // contoh lain mau menambahkan "C" ke index 1
        curr = this.head;
        let prev;

        for (let i = 0; i < index; i++) {
          prev = curr;
          /** hasilnya adalah
           * 
          head: {
            element: "A",
            next: {
              element: "B",
              next: null
            }
          },
           */
          curr = curr.next;
          /** hasilnya adalah
           * 
          {
              element: "B",
              next: null
            }
           */
        }

        prev.next = node;
        /** hasilnya adalah
         * 
        head: {
          element: "A",
          next: {
            element: "C",
            next: null
          }
        },
         */
        node.next = curr;
        /**
         * 
        head: {
          element: "A",
          next: {
            element: "C",
            next: {
            element: "B",
            next: null
          }
          }
        },
        
         */
      }
      this.size += 1;
    }
  }

  removeAt(index) {
    // kita mau menghapus index 0
    /**
     * let linkedList = {
      head: {
        element: "A",
        next: {
          element: "B",
          next: null
        }
      },
    };
     */
    if (index < 0 || index >= this.size) {
      return console.log("Please enter a valid index");
    } else {
      let curr = this.head;
      /**
       * 
      head: {
        element: "A",
        next: {
          element: "B",
          next: null
        }
      },
       */
      let prev = curr;
      /** hasilnya adalah
       * 
      head: {
        element: "A",
        next: {
          element: "B",
          next: null
        }
      },
       */

      if (index === 0) {
        this.head = curr.next;
        /** hasilnya adalah
         * 
        {
            element: "B",
            next: null
          }
        },
         */
      } else {
        // contoh lain kita mau menghapus index 1
        for (let i = 0; i < index; i++) {
          prev = curr;
          /** hasilnya adalah
           * 
          head: {
            element: "A",
            next: {
              element: "B",
              next: null
            }
          },
           */
          curr = curr.next;
          /** hasilnya adalah
           * 
          {
              element: "B",
              next: null
            }
           */
        }

        prev.next = curr.next;
        /**
         * hasilnya adalah
        {
            element: "A",
            next: null
          }
         */
      }

      this.size -= 1;
      return curr.element;
      // element: "A",
    }
  }

  removeElement(element) {
    // kita mau menghapus "A"
    /**
     * let linkedList = {
      head: {
        element: "A",
        next: {
          element: "B",
          next: null
        }
      },
    };
    */

    let current = this.head;
    let prev = null;

    while (current != null) {
      // selama current this.head tidak null maka loop lanjut terus
      if (current.element === element) {
        // current.element --> "A" === element --> "A",
        if (prev == null) {
          this.head = current.next;
          /** hasilnya adalah
           * 
          head: {
            element: "A",
            next: null
            }
           */
        } else {
          // contoh lain menghapus "C"
          prev.next = current.next;
          /** hasilnya adalah
           * 
          head: {
            element: "A",
            next: {
          element: "B",
          next: null
          }
          },
           */
        }

        this.size -= 1;

        return current.element;
        // "A"
        // "B"
      }

      prev = current;
      current = current.next;
    }

    return null;
  }

  indexOf(element) {
    // ingin mencari index dari element "B"
    /* kita menggunakan contoh linked list berikut 
let linkedList = {
    head: {
        element: "A",
        next: {
            element: "B",
            next: {
                element: "C",
            },
        },
    },
};
*/
    let count = 0; // 1
    let current = this.head;

    // selama current bukan null maka, akan loop-ing
    while (current != null) {
      if (current.element === element) {
        return count;
        // apakah current.element --> A === element --> B? jawabannya tidak maka count += 1 dan
      }

      count += 1;
      current = current.next;
      //   current menjadi current.next
      /**
       current.next:
     {element: "B",
            next: {
                element: "C",
            },
        },
      
        akan me looping lagi karena current nilainya bukan null, lalu dicek di conditional if 
        karena current current.element --> B ===  element --> B maka akan mereturn count sekarang yaitu count = 1     
     */
    }
    // jika tidak ditemukan elemen pada linkedlist maka akan return -1
    return -1;
  }
}

let linkedList = new LinkedList();
linkedList.add("A");
linkedList.add("B");
linkedList.add("C");
linkedList.add("D");
linkedList.printList();
linkedList.insertAt("New Value", 2);
linkedList.removeAt(3);
linkedList.removeElement("B");
console.log(linkedList);
linkedList.printList();
console.log(linkedList.indexOf("C"));
console.log(linkedList.size);
