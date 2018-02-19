import deltaCount from './deltaCount'

test('Incrementing', () => {
  const result = deltaCount(40)({ count: 2 })

  expect(result).toEqual({
    count: 40 + 2
  })
})

test('Decrementing', () => {
  const result = deltaCount(-3)({ count: 9 })

  expect(result).toEqual({
    count: 9 - 3
  })
})
