defmodule L347 do
  def top_k_frequent(nums, k) do
    seen(nums)
    |> Map.to_list()
    |> Enum.reduce(PriorityQueue.new(), fn {num, freq}, pq ->
      PriorityQueue.put(pq, {-1 * freq, num})
    end)
    |> k_smallest([], k)
    |> Enum.reverse()
  end

  def k_smallest(_pq, answers, 0), do: answers

  def k_smallest(pq, answers, k) do
    {{_freq, num}, pq} = PriorityQueue.pop!(pq)
    k_smallest(pq, [num | answers], k - 1)
  end

  def seen(nums) do
    nums
    |> Enum.reduce(%{}, fn x, acc ->
      Map.update(acc, x, 1, &(&1 + 1))
    end)
  end

  def go do
    IO.puts("Expected output")

    expected_output =
      [1, 2]
      |> IO.inspect()

    IO.puts("Actual output")

    actual_output =
      top_k_frequent([1, 1, 1, 2, 2, 3], 2)
      |> IO.inspect()

    IO.puts("Are same?")

    (actual_output == expected_output)
    |> IO.inspect()
  end
end
