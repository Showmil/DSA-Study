def same(arr1, arr2):
    if len(arr1) != len(arr2):
        return False

    frequency_counter1 = {}
    frequency_counter2 = {}

    for val in arr1:
        frequency_counter1[val] = frequency_counter1.get(val, 0) + 1

    for val in arr2:
        frequency_counter2[val] = frequency_counter2.get(val, 0) + 1

    for key in frequency_counter1:
        if key ** 2 not in frequency_counter2:
            return False
        if frequency_counter2[key ** 2] != frequency_counter1[key]:
            return False

    return True

# 테스트 예제
arr1 = [1, 2, 3]
arr2 = [1, 4, 9]
print(same(arr1, arr2))  # True