num_cases = int(input())
i = 0
while i < num_cases:
    num_elements = int(input())
    checkpoints = list(map(int, input().split()))
    total_peaks = 0
    j = 1
    while j < num_elements - 1:
        if checkpoints[j - 1] < checkpoints[j] > checkpoints[j + 1]:
            total_peaks += 1
        j += 1
    print("Case #{}: {}".format((i + 1), total_peaks))
    i += 1
