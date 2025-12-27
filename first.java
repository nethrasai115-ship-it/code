import java.util.*;
class student{
    static int count=0;
    student(){
        count++;
}
static void showcount(){
    System.out.println("Number of objects created: " + count);
}public class main {
    public static void main(String args[]){
        student s1=new student();
        student s2=new student();
        student s3=new student();
        student.showcount();
    }
}