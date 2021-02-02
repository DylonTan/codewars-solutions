class Primes {
    static * stream() {
      // replace this with your solution

      // Integer to test for primality 
      let i = 2

      // Table of non-prime integers
      let table = {}

      while (true) {
        // Check if integer is not in table of non-primes
        if (!(i in table)) {
            yield i

            // Add square of prime to table of non-primes
            table[i * i] = [i]
        } else {
            // Loop through factors of non-prime integer
            for (let factor of table[i]) {
                // Check if entry of multiple is available
                if (table[i + factor] instanceof Array) {
                    // Move factors to entry of multiple
                    table[i + factor].push(factor)
                } else {
                    // Create entry of multiple
                    table[i + factor] = [factor]
                }

                // Delete unused entry
                delete table[i]
            }
        }

        i++
      }
    }
  }

 