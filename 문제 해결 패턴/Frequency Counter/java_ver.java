import java.util.HashMap;

public class Main {
    public static boolean same(int[] arr1, int[] arr2) {
        if (arr1.length != arr2.length) {
            return false;
        }

        HashMap<Integer, Integer> frequencyCounter1 = new HashMap<>();
        HashMap<Integer, Integer> frequencyCounter2 = new HashMap<>();

        // arr1 빈도 계산
        for (int val : arr1) {
            frequencyCounter1.put(val, frequencyCounter1.getOrDefault(val, 0) + 1);
        }

        // arr2 빈도 계산
        for (int val : arr2) {
            frequencyCounter2.put(val, frequencyCounter2.getOrDefault(val, 0) + 1);
        }

        // 빈도 비교
        for (int key : frequencyCounter1.keySet()) {
            int squaredKey = key * key;
            if (!frequencyCounter2.containsKey(squaredKey)) {
                return false;
            }
            if (!frequencyCounter2.get(squaredKey).equals(frequencyCounter1.get(key))) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3};
        int[] arr2 = {1, 4, 9};
        System.out.println(same(arr1, arr2));  // true
    }
}