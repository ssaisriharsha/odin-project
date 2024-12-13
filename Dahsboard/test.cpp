#include <iostream>
#include <vector>
using namespace std;

void pushZerosToEnd(vector<int>&);
void swap(int&, int&);

int main()
{
    std::vector<int> vec;
    int n = 0;
    std::cin >> n;
    for(int i=0; i<n; i++) {
        int e = 0;
        std::cin >> e;
        vec.emplace_back(e);
    }
    pushZerosToEnd(vec);
    for(auto x: vec) {
        std::cout << x << ",";
    }
    return 0;
}

void pushZerosToEnd(vector<int> &arr)
{
    for (int i = 1; i < arr.size(); i++)
    {
        if (arr[i] != 0 && arr[i - 1] == 0 && i > 0)
        {
            swap(arr[i], arr[i - 1]);
            i -= 2;
        }
    }
}
void swap(int &a, int &b)
{
    int c = a;
    a = b;
    b = c;
}
