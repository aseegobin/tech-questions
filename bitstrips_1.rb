# Given an array of names, construct a mapping of
#  people to whom they are going to give a gift to.
#  The giftGiver and giftReceiver cannot be the same person.
#  The giftGiver and giftReceiver do not have to be
#  paired together - meaning a giftGiver can 
#  receive a gift from someone different.

# part 2: Build a dictionary system for each year
# where every year the same pairs cannot be repeated

names = ['Avie', 'Diego', 'Derek', 'Santa','Tina','Joanne','David','Jason','Jenny', 'Eric'];

def secretSanta (names, dictionary = {})
  pairs = {}
  buyer_of_gift = Array.new(names)
  receiver_of_gift = Array.new(names)

  for index in 0 ... names.size
      buyer = names[index]

      receiver = receiver_of_gift[Random.rand(receiver_of_gift.size)]

    while buyer == receiver || dictionary[buyer] == receiver
      receiver = receiver_of_gift[Random.rand(receiver_of_gift.size)]
    end

    pairs[buyer] = receiver

    buyer_of_gift.delete(buyer)
    receiver_of_gift.delete(receiver)
    
  end

    pairs
end

year1 = secretSanta(names)
year2 = secretSanta(names, year1)
year3 = secretSanta(names, year2)
year4 = secretSanta(names, year3)
year5 = secretSanta(names, year4)
year6 = secretSanta(names, year5)

puts year1
puts year2
puts year3
puts year4
puts year5
puts year6