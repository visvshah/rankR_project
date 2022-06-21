import java.util.*;
public class estimatingtheareaofacircle{
    public static void estimate(double r, int marks, int inCircle){
        double areaSquare = Math.pow(2 * r, 2);
        double areaCircle = Math.PI * Math.pow(r, 2);
        double ratio = (double) inCircle / marks;
        double estimateCircle = areaSquare * ratio;
        System.out.println(areaCircle + " " + estimateCircle);
    }
    public static void main(String[] args){
        Scanner s1 = new Scanner(System.in);
        while(s1.hasNext()){
            String input = s1.nextLine();
            String[] numbers = input.split(" ");
            double r = Double.parseDouble(numbers[0]);
            int marks = Integer.parseInt(numbers[1]);
            int inCircle = Integer.parseInt(numbers[2]);
            estimate(r, marks, inCircle);
        }
    }
}