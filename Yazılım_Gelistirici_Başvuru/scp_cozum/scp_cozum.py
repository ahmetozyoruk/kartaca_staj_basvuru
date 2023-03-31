text = "Povzhv hvmw z nvhhztv drgs xfiivmg hvhhrlm rm qhlm ulinzg erz gsrh vcznkov : {\"gbkv\":\"REGISTER\",\"mznv\":\"blfi mznv\",\"hfimznv\":\"blfi hfimznv\",\"vnzro\":\"blfi vnzro zwwivhh\",\"ivtrhgizgrlmKvb\":\"ccc\"}. Kvvk orhgvmrmt mvd nvhhztv uli gzhp xlmgvmg! Ylfi ivtrhgizgrlmKvb : 8z5wyvw20x8745328zw825zv8ux6x7y69yzzxv0zw9x4w5144vv92926v0607y6y"
words = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
text2 = "with"

temp = list(text)
for i in range(len(words)):
    for item in range(len(text)):
        if words[i] == text[item]:
            temp[item] = words[len(words)-i-1]
            string = "".join(temp)

print(string)
