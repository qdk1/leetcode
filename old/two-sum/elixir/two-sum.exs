#! /usr/bin/elixir
defmodule LeetCode do
  def two_sum(nums, target) do
    nums
    |> all_pairs
    |> Enum.filter(fn {x, y, _i, _j} -> x + y == target end)
    |> Enum.take(1)
    |> Enum.map(fn {_x, _y, i, j} -> [i, j] end)
    |> Enum.at(0)
  end

  def all_pairs(list) do
    list_i = list |> Enum.with_index()
    for {x, i} <- list_i, {y, j} <- list_i, i < j, do: {x, y, i, j}
  end
end

nums = [2, 7, 11, 15]
target = 9
actual_output = LeetCode.two_sum(nums, target)
expected_output = [0, 1]

IO.puts("Basic test case:")

(actual_output == expected_output)
|> IO.inspect()
