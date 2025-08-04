<View className="flex flex-row items-end justify-between mb-4 mx-3">
              <View className="w-24">
                <Text className="text-sm font-semibold text-gray-600 mb-1">Min Price</Text>
                <TextInput
                  value={minPrice}
                  onChangeText={setMinPrice}
                  keyboardType="numeric"
                  placeholder="0"
                  className="rounded border py-2 leading-0 border-gray-200 bg-white text-sm sm:text-base text-gray-700 focus:border-[#009900]"
                />
              </View>
              <View className="flex-1 mx-3 mb-4 max-w-full">
                <View
                  className="max-w-full"
                  style={{
                    height: 6,
                    backgroundColor: '#ddd',
                    borderRadius: 3,
                  }}
                />
                <Animated.View
                  style={{
                    position: 'absolute',
                    height: 6,
                    backgroundColor: '#009000',
                    borderRadius: 3,
                    width: `${((parseFloat(maxPrice) || 0) / displayMax) * 100}%`,
                  }}
                />
              </View>
              <View className="w-24">
                <Text className="text-sm font-semibold text-gray-600 mb-1">Max Price</Text>
                <TextInput
                  value={maxPrice}
                  onChangeText={setMaxPrice}
                  keyboardType="numeric"
                  placeholder="1000"
                  className="rounded py-2 leading-0 border border-gray-200 bg-white text-sm sm:text-base text-gray-700 focus:border-[#009900]"
                />
              </View>
            </View>