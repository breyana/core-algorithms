def collatzConjecture(number):
  if isinstance(number, int) == False:
      raise ValueError('Input is not a number')
  collatzArray = [number]
  i = number
  while i > 1:
            if i % 2 == 0 :
                i = i / 2
                collatzArray.append(i)
            else:
                i = 3 * i + 1
                collatzArray.append(i)
  print(collatzArray)
  return collatzArray

collatzConjecture(5)
